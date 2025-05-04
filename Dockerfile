# ---- Node modules ----- #
FROM oven/bun AS node_modules

WORKDIR /opt/app

COPY ./package*.json ./bun* ./

RUN bun install --ignore-scripts

# ---- Build ------------ #
FROM node:22-bullseye-slim AS dist

ARG CI_COMMIT_TAG
ENV CI_COMMIT_TAG=$CI_COMMIT_TAG
ENV SENTRY_RELEASE=$CI_COMMIT_TAG
ENV NUXT_PUBLIC_APP_VERSION=$CI_COMMIT_TAG

WORKDIR /opt/app

COPY --from=node_modules /opt/app/node_modules ./node_modules
COPY .                                         .

RUN npm run build

# ---- Release ---------- #
FROM gcr.io/distroless/nodejs22-debian12

ARG CI_COMMIT_TAG

WORKDIR /opt/app

COPY --from=dist /opt/app/.output .output

ENV HOST=0.0.0.0
ENV NUXT_PUBLIC_CMS_URL=https://api.kvakushnik.ru/static/wander-mark

CMD [ ".output/server/index.mjs" ]

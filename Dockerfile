# ---- Node modules ----- #
FROM oven/bun AS node_modules

WORKDIR /opt/app

COPY ./package*.json ./bun* ./

RUN bun install --ignore-scripts

# ---- Build ------------ #
FROM node:24-bullseye-slim AS dist

WORKDIR /opt/app

COPY --from=node_modules /opt/app/node_modules ./node_modules
COPY .                                         .

RUN npm run build

# ---- Release ---------- #
FROM gcr.io/distroless/nodejs24-debian12

WORKDIR /opt/app

COPY --from=dist /opt/app/.output .output

ENV HOST=0.0.0.0
ENV NUXT_PUBLIC_CMS_URL=https://api.kvakushnik.ru/static/wander-mark

CMD [ ".output/server/index.mjs" ]

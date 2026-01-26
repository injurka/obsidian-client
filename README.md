# Obsidian Mark Client

![WanderingMark](https://github.com/user-attachments/assets/1d95afd7-8150-4ec1-9c5b-f686606ed6be)

> ssh root@62.60.236.182
> cd sources/chinisik-back/static
> rm -rf content
> scp -r ./.output root@62.60.236.182:/root/static/content

```bash
docker run -d --network host \
  -e PORT=5555 \
  -e NUXT_PUBLIC_CMS_URL="http://localhost:5173/static/wander-mark" \
  md-client
```

<!--
docker build -t injurka/md-client:v11 .
docker push injurka/md-client:v11
-->

<!--
docker run -d \
  -p 5555:3000 \
  -v /full/path/to/your/content:/app/data \
  -e PORT=3000 \
  -e NUXT_FS_BASE_PATH="/app/data" \
  -e NUXT_PUBLIC_CMS_URL="/local-files" \
  injurka/md-client:v1
-->

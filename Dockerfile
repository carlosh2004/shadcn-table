FROM node:22-alpine

RUN corepack enable

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "preview"]

FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:20-alpine
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["npm", "start"]

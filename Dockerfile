FROM node:22-alpine as builder

ARG NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG SUPERTOKENS_CONNECTION_URI=$SUPERTOKENS_CONNECTION_URI
ARG SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY
ARG API_URL=$API_URL
ARG API_KEY=$API_KEY
ARG ADMIN_EMAIL=$ADMIN_EMAIL
ARG OPENAI_API_KEY=$OPENAI_API_KEY
ARG S3_ENDPOINT=$S3_ENDPOINT
ARG S3_ACCESS_KEY=$S3_ACCESS_KEY
ARG S3_SECRET_KEY=$S3_SECRET_KEY
ARG DOKU_API_URL=$DOKU_API_URL
ARG DOKU_CLIENT_ID=$DOKU_CLIENT_ID
ARG DOKU_SECRET_KEY=$DOKU_SECRET_KEY
ARG NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN
ARG SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ARG SMTP_HOST=$SMTP_HOST
ARG SMTP_PORT=$SMTP_PORT
ARG SMTP_USER=$SMTP_USER
ARG SMTP_PASS=$SMTP_PASS
ARG SMTP_FROM=$SMTP_FROM

# Set the working directory inside the container
WORKDIR /app

COPY yarn.lock .
COPY package.json .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM node:22-alpine as runner

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/next.config.mjs .
COPY --from=builder /app/sentry.client.config.ts .
COPY --from=builder /app/sentry.edge.config.ts .
COPY --from=builder /app/sentry.server.config.ts .

EXPOSE 3000

ENTRYPOINT [ "node" , "server.js" ]

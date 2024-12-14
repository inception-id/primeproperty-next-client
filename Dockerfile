FROM node:22-alpine as builder

# Pass the environment variables to the build command
ARG NEXT_PUBLIC_HOST_URL
ARG SUPERTOKENS_CONNECTION_URI
ARG SUPERTOKENS_API_KEY

# Set the environment variables for the build process
ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
ENV SUPERTOKENS_CONNECTION_URI=$SUPERTOKENS_CONNECTION_URI
ENV SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY

# Set the working directory inside the container
WORKDIR /app

COPY . /app
RUN yarn
RUN yarn build

FROM node:22-alpine as runner

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["yarn", "start"]

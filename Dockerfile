FROM node:22-alpine as builder

# Pass the environment variables to the build command
ARG NEXT_PUBLIC_HOST_URL

# Set the environment variables for the build process
ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL

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

FROM node:7.9-alpine

RUN apk add --update git alpine-sdk bash wget openssh

RUN ls -l
RUN wget https://yarnpkg.com/install.sh
RUN chmod +x install.sh
RUN ["./install.sh", "--nightly"]
RUN yarn -v

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
#ADD .yarnrc /app/.yarnrc
#ADD npm-packages-offline-cache ./npm-packages-offline-cache
#RUN yarn config set yarn-offline-mirror ./npm-packages-offline-cache

RUN yarn

ADD . /app

WORKDIR /app

ADD REVISION /REVISION

EXPOSE 9000

CMD ["yarn", "dev"]

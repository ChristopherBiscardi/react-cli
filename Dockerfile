FROM node:0.10

WORKDIR /opt/docker-tutorial
ENV PATH /opt/node_modules/.bin:$PATH

ADD . /opt/docker-tutorial

RUN npm install
RUN mv /opt/docker-tutorial/node_modules ..

CMD ["webpack"]

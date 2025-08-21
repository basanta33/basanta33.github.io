FROM ruby:3.3
ENV DEBIAN_FRONTEND=noninteractive

LABEL maintainer="Basanta Khakurel"

RUN apt-get update -y && apt-get install -y --no-install-recommends \
    locales \
    imagemagick \
    build-essential \
    zlib1g-dev \
    jupyter-nbconvert \
    inotify-tools \
    procps && \
    apt-get clean && rm -rf /var/lib/apt/lists/* 

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen


ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8 \
    JEKYLL_ENV=production

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --no-cache

COPY . .

EXPOSE 8080

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "8080", "--watch"]


FROM alpine

RUN apk update && \
    apk add --no-cache lighttpd && \
    rm -rf /var/cache/apk/*

ADD lighttpd.conf /etc/lighttpd/lighttpd.conf

ENTRYPOINT ["/usr/sbin/lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]

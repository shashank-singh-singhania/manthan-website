FROM nginx:stable-alpine
COPY  ./nginx/nginxprod.conf /etc/nginx/conf.d/default.conf
# COPY  ./nginx/upstream.conf /etc/nginx/conf.d/loadbalancer.conf
# COPY --from=build /formjs/nginx/web.conf /etc/nginx/conf.d/web.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
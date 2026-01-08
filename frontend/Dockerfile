FROM httpd:2.4

# Enable required proxy modules
RUN sed -i 's/#LoadModule proxy_module/LoadModule proxy_module/' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/#LoadModule proxy_http_module/LoadModule proxy_http_module/' /usr/local/apache2/conf/httpd.conf

# Include our proxy config WITHOUT touching MPM
RUN echo "Include conf/extra/proxy.conf" >> /usr/local/apache2/conf/httpd.conf

# Copy proxy config
COPY proxy.conf /usr/local/apache2/conf/extra/proxy.conf

# Copy frontend static files
COPY . /usr/local/apache2/htdocs/

EXPOSE 80


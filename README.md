<h1 align="center"> Daily News Project </h1>

<p align="center">
Site feito para simular um jornal online, o qual foi realizado por mim, Cezar Augusto.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 🐳 Inicializando o Docker
  ### Primeiro
  - Instale Docker Desktop: https://www.docker.com/products/docker-desktop/ 
  ### Segundo
  - Use esse comando no seu terminal:
                  
        docker pull nginx

  ### Terceiro 
  - Use esse comando no seu terminal para iniciar a aplicação no seu localhost 

        docker run --hostname=ed612f76fe95 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NGINX_VERSION=1.25.3 --env=PKG_RELEASE=1 --env=NJS_VERSION=0.8.2 --network=projectfrontendat_news-page -p 30000:80 --label='com.docker.compose.config-hash=70f01df3a980f412a3bf5f2963e250d3fba0d7062f80dd1b0a9aa021ee6aae3c' --label='com.docker.compose.container-number=1' --label='com.docker.compose.depends_on=' --label='com.docker.compose.image=sha256:b8ab929a91a8fbf8af5f4f246cf95f2f18c0493f8593936c74d21c05fe2da5e2' --label='com.docker.compose.oneoff=False' --label='com.docker.compose.project=projectfrontendat' --label='com.docker.compose.project.config_files=C:\development\projectFrontEndAt\compose.yaml' --label='com.docker.compose.project.working_dir=C:\development\projectFrontEndAt' --label='com.docker.compose.service=proxy' --label='com.docker.compose.version=2.23.0' --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' --runtime=runc -d news-page-nginx

    http://localhost:30000

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- Bootstrap
- JavaScript
- Git e Github

## 💻 Projeto

O DailyNews é um projeto simulador de um jornal online com diversos tipos de notícias.

Link de visualização do projeto: https://czr125.github.io/projectFrontEndAt/

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Made by ⚡ @czr_mutran :wave: 

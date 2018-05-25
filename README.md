# NGRX Configuration Management

This is a demo project that shows how you can dynamically load environment variables after the Angular CLI compilation phase.

It is a sort of work around the `src/environments/` files, which must have the environment variables stored at compile time.

This project might be useful for anyone who wants to use Kubernetes and a dockerized Angular app running inside a NGINX container.

**WARNING**: This is not a solution for managing secrets. You might not want to use this method if you are sharing sensitive information.

## TLDR

In short, create a _config.json_ file in `src/assets/config` with all your environment variables. Make sure to _gitignore_ it.

Create a _ConfigService_ that loads the file using the Angular _HttpClient_ and store all values inside an NGRX store.

Dispatch an NGRX _Action_ in the `app-component.ts` file. You should be able to access all configuration values anywhere in the application by injecting the store with the config state in any component constructor.

Once you build the app, the `config.json` file will be available in the `dist/ngrx-config-mgmt/assets/config/config.json`. Since you only need the `dist` folder when serving the app via NGINX, you can easily mount a Kubernetes volume on that path and pass your own configuration.

## In depth

**TODO**: Add in-depth explanation...

## References

I was having problems with dockerizing an Angular app and running it in a Kubernetes cluster. I had no clue on how to use the same Docker image for my Angular app and change its configuration at run-time. Luckily I got inspired by some discussion and a blog post by Ahmed Mansour:

* [Reddit Discussion](https://www.reddit.com/r/docker/comments/7uyghl/how_to_pass_environment_variables_to_a_frontend/)
* [Ahmed Mansour - How to add environment variables to Angular app at run-time](https://www.ahmedmansour.me/how-to-add-environment-variables-to-angular-app-on-run-time/)

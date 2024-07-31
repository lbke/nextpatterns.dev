---
type: lesson
title: Streaming files from route handlers
---

# Streaming files from route handlers


## Public static files are not enough

It's very common to allow the users of website to download static files.

Images are the most common type of static files, your websites probably have a logo or a picture somewhere on the homepage.
You may want to share your CV in PDF format, or a slideshow describing your companies.

The `/public` folder of Next.js apps let share static files. 
But as the name implies, files in this folder are totally public: this doesn't fit all use cases.

## More advanced scenarios with route handlers

This pattern will let you cover the following advanced use cases :

- Private files: you may want to check some permissions before serving "extremely_confidential_report.docx"
- Personalized files: a generic url "/user/profile-picture" may serve a different image depending on the currently logged user
- Generated files: the State of JavaScript survey backoffice app can generate CSV exports of the responses to the survey. This means we generate the file on the fly depending on the selected survey when we receive an export request.

We can't use the `/public` folder for that, we have to craft a more elaborate API endpoint to serve the files.
In Next.js App Router, we call API endpoints "Route Handlers".

## Practice 

> Warning: this exercise consists in adding a single line into the code, but don't get fooled: this is considered a very difficult pattern!
> You can jump straight to the solution using the dedicated button.

- If you are not yet familiar with Route Handlers, start by reading the [official documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 
- Read the documentation for [Node.js filehandle.readableWebStream](https://nodejs.org/docs/v20.16.0/api/fs.html#filehandlereadablewebstreamoptions)
- Use this function to transform the file stream into a webstream. **You will need the "bytes" option.**
- The image should appear in the website.

> NextPatterns is currently in its beta-test phase.
> Want to join? Reach out to me on [X (ericbureltech)](https://x.com/ericbureltech).

## References

I previously wrote articles about streaming files,
using a custom function. Special thank to [Karl Horky](https://github.com/karlhorky) for showing me a simpler approach.

[Node.js GitHub issue related to using readableWebStream in Next.js](https://github.com/nodejs/node/issues/54041)

[How to stream files from Next.js Route Handlers - ericburel.tech](https://www.ericburel.tech/blog/nextjs-stream-files)

[French version of this article - formationnextjs.fr](https://www.formationnextjs.fr/ressources/route-handlers-et-fichiers)

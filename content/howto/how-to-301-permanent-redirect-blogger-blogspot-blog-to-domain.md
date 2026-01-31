Title: How to 301 Permanent Redirect Blogger-Blogspot Blog to Domain?
Date: 2019-05-28
Modified: 2019-05-28
Category: howto
Tags: blogging
Author: esonusharma.github.io
Summary: I know its difficult to migrate blogger/blogspot blog hosted at bare blogspot domain “<https://your-blog-name.blogspot.com>” to newly bought branded domain name something like “<https://yoursite.com>”.
Status: published

I know its difficult to migrate blogger/blogspot blog hosted at bare blogspot domain “[https://your-blog-name.blogspot.com](https://your-blog-name.blogspot.com)” to newly bought branded domain name something like “[https://yoursite.com](https://yoursite.com)”.

### So what exactly is SEO Redirection or 301 Redirection?

When you want that a blog post or blog page of your blog should transfer its traffic and google search ranking authority to a new URL where this content is shifted, then you need SEO Redirection.

As you are **permanently** moving your blog content under a **new domain name**, you need to tell Google about it, so that Google acknowledges the change and transfers the authority of your content to a new address and does not treat the same content at a new URL as plagiarised content and deny **rankings**.

You can inform this to Google by providing a **301 Redirect** at the old address of the content.

301 Redirect tells Google that the content present at that location is **permanently shifted** to a new address.

The traffic is shifted permanently by Google instantly when it finds this redirect.

But the rankings transfer takes some time.

Normally you can easily create a 301 Redirect for a personal domain name you own.

### 301 Redirect can be created by

- Defining it in the **.htaccess** file available in the hosting if you have hosting.
- **Forwarding** the domain name in your domain control panel provided by the domain name provider choosing the **permanent redirect**/forward option if you don’t have hosting.

But it seems next to impossible to do the same in the case when you don’t own the domain name as the case in **blogger/blogspot** naked domain.

Now I am going to share a method in which you can achieve this.

I have tried this method when I was shifting from blogger to my own domain name and I was successful in **transferring** the ranking of my popular blog posts to a **new web address** but I cannot guarantee you the same as this is dependent on google and varies on case basis.

Insert the code shown below just after the ``<head>`` tag in the **blogger template** after replacing the generalized content to your own in the code below.

```
 <b:if cond="’data:blog.url" =="“<http://your-blog-name.blogspot.com/YEAR/MONTH/BLOG-POST-SLUG.html>”‘"><meta content="’0;url=http://yoursite.com/NEW-BLOG-POST-SLUG.html’" http-equiv="’refresh’/"></b:if>

 <b:if cond="’data:blog.url" =="“<http://your-blog-name.blogspot.com/p/BLOG-PAGE-SLUG.html>”‘"><meta content="’0;url=http://yoursite.com/NEW-BLOG-PAGE-SLUG.html’" http-equiv="’refresh’/"></b:if>

 <b:if cond="’data:blog.url" =="“<http://your-blog-name.blogspot.com/>”‘"><meta content="’0;url=http://yoursite.com/’" http-equiv="’refresh’/"></b:if>
```

If you are fortunate enough, after a few days of doing this you can see your new URL in place of the old URL in google search.
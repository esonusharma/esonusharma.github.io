Title: template-mermaid
Date: 2024-07-05
Modified: 2024-07-05
Category: 
Tags: 
Author: esonusharma.github.io
Summary: 
Status: draft

<script type="module"> import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; mermaid.initialize({ startOnLoad: true }); </script>

<pre class="mermaid">
flowchart LR
  A(Node Publisher 1) --Message 1--> B(Topic 1);
  C(Node Publisher 2) --Message 2--> B;
  B --Message 1,Message 2--> D(Node Subscriber 1);
  B --Message 1, Message 2--> E(Node Subscriber 2);
  B --Message 1, Message 2--> F(Node Subscriber 3);
</pre>
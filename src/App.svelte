<script lang="coffeescript">

  import { resourceLinks,  totalResourceLinks, createNewLink } from './resources/links.js'

  ###
  resourceLinks.forEach(element => {
    linkName = 'resourceLink'+element.id;
    linkName = createNewLink(element.id, element.url, element.title, element.desc, element.tags)
  })
  ###

  export name = "" 
  links = [] = resourceLinks

</script>

<!--  no variable declarations in coffeescript but export still works as expected -->
<style lang="stylus">
  :global(body)
    background-color #d8da5657

  :global(*)
    box-sizing border-box

  h1
    display block
    color #ff3e00
    text-transform uppercase
    font-size 8vw
    font-weight 100
    text-align center

  main
    display block
    margin 0
    padding 0

  .section-title
    position relative
    display none
    top: -1rem
    color #ff4500
    font-size 6vw
    font-weight 200
    margin 2vw
    text-align center

  ul
    color #ff4500
    list-style-type square
    margin-left 1vw
    font-size 4vw
    text-align left

  a
    color #800080

  .pugjs, .resources
    display block
    background-color rgba(255,255,255,0.9)
    border-radius 15px
    padding 5vw
    margin 5vw
    width 90vw

  .blocks
    color #ff4500
    margin 0.5rem
    font-size 4vw
    text-align center
    width 100%
  
  .blocks th, .blocks tr
    text-align left

</style>

<!--
  no pesky handlebars, feels like a breeze, no?
-->

<!-- prettier-ignore -->
<!--- Now you don't have use brackets thanks Pug and Svelte {#…} block syntax has a mixin each to not interfere with coffescripts own logic  expressions -->
<template
  lang="pug">
  +if ('name === ""')
    h1 Hello stranger!
    +else
      h1 Hello {name}!
  main.killawabbit

    section.pugjs
      h2.section-title Pug Svelte Blocks:
      table.blocks
        tr
          th Pug Mixin
          th Svelte Block
        tr 
          td +if('logic') 
          td
            code &#123;#if logic&#125;
        tr 
          td +else
          td
            code &#123;:else&#125;
        tr 
          td +elseif('logic')  
          td
            code &#123;:else if logic&#125;
        tr 
          td +each('arr as item') 
          td
            code &#123;#each arr as item&#125;
        tr 
          td  +key('var')  
          td
            code &#123;#key var&#125;
        tr 
          td  +await('promise')
          td
            code &#123;#await promise&#125;
        tr 
          td +then()  
          td
            code &#123;:then&#125;
        tr 
          td  +catch('error') 
          td
            code &#123;:catch(error)&#125;
        tr 
          td +html('string')
          td 
            code &#123;@html string&#125;
        tr 
          td +debug('object')
          td 
            code &#123;@debug object&#125;

    section.resources
      span.section-title Some resources:
      ul
        +each('links as link')
          li
            a(href="{link.url}") {link.title} 
            | - {link.desc}
</template>
<!-- Can you see how you will save time writing svelte code with this setup? As long as you understand the underlaying markup, scripting and styling languages, you will be able to put out code -->

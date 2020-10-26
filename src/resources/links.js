	//import { writable } from './svelte-local-storage-store.js';

	export let resourceLinks = [
		{
			id: 1,
			url: "https://svelte.dev/tutorial",
			title: "Svelte Tutorial",
			desc: "Svelte Official Tutorial",
			tags: ["svelte", "tutorial", "reference"]
			},
		{
			id: 2,
			url: "https://pugjs.org/language/tags.html",
			title: "Pug Tag Syntax",
			desc: "Learn the tags of Pug",
			tags: ["pugjs", "reference"]
		},
		{
			id: 3,
			url: "https://github.com/sveltejs/svelte-preprocess/blob/master/docs/preprocessing.md",
			title: "Svelte PreProcessor Docs",
			desc: "Docs usage of the included preprocessors of Svelte PreProcessor with options etc",
			tags: ["svelte", "preprocess", "reference"]
		},
		{
			id: 4,
			url: "https://devhints.io/pug",
			title: "Pug cheatsheet",
			desc: "Cheatsheet basics with Pugjs",
			tags: ["pugjs", "cheatsheet", "reference"]
		}
	];
	
	export let totalResourceLinks = resourceLinks.length;

	export function createNewLink(id,url,title,description,tags) {
		const item = {};
		this.id = id;
		this.url = url;
		this.title = title;
		this.description = description;
		this.tags = tags;
		let link = '';
		this.standardLink = function() {
			link = `<a href="${this.url}" id="${this.id}">${this.title}</a>`;
			//console.log(link);
			return link;
		};
		this.extendedLink = function() {
			link = `${this.standardLink} - ${this.description}`;
			//console.log(link);
			return link; 		
		};
	}
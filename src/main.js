import App from './App.svelte';
//import linksResources from './resources/linksResources';

const app = new App({
	target: document.body,
	props: {
		// try to comment out the line below and see what happens on save
		name: 'friend', 
		//links: linksResources,
	}
});

export default app;
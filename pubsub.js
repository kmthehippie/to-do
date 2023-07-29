export const pubsub = {
    events: {},
    subscribe: function(evName, fn){
        console.log(`PUBSUB: someone sub to ${evName}`);
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn);
        console.log(events);
    },
    unsubscribe: function(evName, fn){
        console.log(`PUBSUB: someone unsub to ${evName}`);
        if(this.events[evName]){
            this.events[evName] = this.events[evName].filter(f => f !==fn)
        }
        console.log(events);
    },
    publish: function(evName, data){
        console.log(`PUBSUB: Making broadcast about ${evName} with ${data}`);
        if (this.events[evName]){
            this.events[evName].forEach(f =>{
                f(data);
            })
        }
        console.log(events);
    }
}
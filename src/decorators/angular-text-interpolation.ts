type ComponentConfig = {
    elementId: string;
    template: string;
}

function UseComponent(config: ComponentConfig) {
    return function (constructor: any) {
        const component = new constructor();

        const container = document.getElementById(config.elementId);
        if (!container) {
            console.error(`Target element with id '${config.elementId}' does not exist`);
            return;
        }
        let { template } = config;

        for (const el in component) {
            const replace = `{{*${el}*}}`;
            const re = new RegExp(replace, "g");

            template = template.replace(re, component[el]);
        }

        container.innerHTML = template;
    }
}

@UseComponent({
    elementId: 'app',
    template: `
        <h1 style="color: red">{{title}}</h1> <br/>
        <h2 style="border: 1px solid blue">{{str}}</h2> <br/>
        <h3 style="text-align: center">{{str2}}</h3> <br/>
    `
})
class AppComponent {
    title = 'My App';
    str = 'Test';
    str2 = 'Test2';

    test() {
        console.log(this.str)
    }

    test2() {
        console.log(this.str2)
    }
}
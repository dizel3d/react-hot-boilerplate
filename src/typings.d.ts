declare const module;
declare const require;

declare module 'react' {
    const React;
    export default React;

    export class Component {
        constructor(props);
        state;
        interval;
        setState;
    }
}

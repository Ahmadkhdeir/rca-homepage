// handles importing scss/css as modules
declare module '*.scss' {
    const content: string
    export default content
}

declare module '*.css';

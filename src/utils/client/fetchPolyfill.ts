export const fetchPolyfill = (url: string) => {
    const {XDomainRequest} = window as any;
    const XHR =  XDomainRequest;
    return  new Promise((res, rej) => {
        const xhr = new XHR();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            console.log(this)
            res(JSON.parse('[]'))
        }
        xhr.onerror = function() {
            rej(this.responseText)
        }
        xhr.send();
    });
}

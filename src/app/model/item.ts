export class Item {
    title: string;
    pureLink: string;
    link: string;
    votes: number = 0;
    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.pureLink = this.extractHost();
    }
    extractHost() {
        let httpsProtocol = "https://";
        let httpProtocol = "http://";
        let indexAfterProtocolSlashes = this.link.indexOf("//") + 2;
        let indexOfSlashFirstSlashAfterHost = this.link.indexOf('/', indexAfterProtocolSlashes);
        let hostLength = indexOfSlashFirstSlashAfterHost - indexAfterProtocolSlashes;
        if (this.link.match("https://") || this.link.match("http://") || this.link.match("://")) {
            return this.link.substr(indexAfterProtocolSlashes, hostLength);
        } else if(this.link.match('/')){
            return this.link.substr(0, this.link.indexOf('/'));
        }else{
            return this.link;
        }
    }
}

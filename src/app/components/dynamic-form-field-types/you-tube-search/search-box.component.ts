/* @Component({ 
    selector: 'app-search-box', 
    template: ` 
    <input type="text" class="form-control" placeholder="Search" autofocus>  
    ` 
}) 

export class SearchBoxComponent implements OnInit { 
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>(); 
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>(); 
    constructor(private youtube: YouTubeSearchService, 
        private el: ElementRef) { 

         } 
         
         ngOnInit(): void { // convert th `keyup` event into an observable stream 39 
         Observable.fromEvent(this.el.nativeElement, 'keyup') 
         .map((e: any) => e.target.value) // extract the value of the input 41 
         .filter((text: string) => text.length > 1) // filter out if empty 42 
         .debounceTime(250) // only once every 250ms 43 
         .do(() => this.loading.emit(true)) // enable loading 44 // search, discarding old events if new input comes in 45 
         .map((query: string) => this.youtube.search(query)) 
         .switch()  // act on the return of the search 48 
         .subscribe( 
             (results: SearchResult[]) => { // on sucesss 50 
                this.loading.emit(false); 
                this.results.emit(results);
            }, 
            (err: any) => { // on error 54 
                console.log(err); 
                this.loading.emit(false); 
            },  () => { // on completion 58 
                this.loading.emit(false);  } );  } }
 */
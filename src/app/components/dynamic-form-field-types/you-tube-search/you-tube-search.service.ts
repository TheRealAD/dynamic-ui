/* import {SearchResult} from "./search-result.model";
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

let YOUTUBE_API_KEY: string = "XXX_YOUR_KEY_HERE_XXX";  
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable() 
export class YouTubeSearchService { 
    constructor(private http: Http, 
        @Inject(YOUTUBE_API_KEY) private apiKey: string, 
        @Inject(YOUTUBE_API_URL) private apiUrl: string) {  } 
        
        search(query: string): Observable<SearchResult[]> { 
            const params: string = [ 
                `q=${query}`, 
                `key=${this.apiKey}`, 
                `part=snippet`, 
                `type=video`, 
                `maxResults=10` 
            ].join('&'); 
            
            const queryUrl = `${this.apiUrl}?${params}`; 
            return this.http.get(queryUrl)
            .map((response: Response) => { 
                return (<any>response.json()).items.map(item => { 
                     // console.log("raw item", item); // uncomment if you want to debug 46 
                     return new SearchResult({ 
                         id: item.id.videoId, 
                         title: item.snippet.title, 
                         description: item.snippet.description, 
                         thumbnailUrl: item.snippet.thumbnails.high.url  });  }); });  }  }

 */
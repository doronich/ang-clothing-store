import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "../../auth/services";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*         if (req.headers.get('No-Auth') == "True")
                    return next.handle(req.clone()); */

        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this.tokenService.getToken();

        if (token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }

        const request = req.clone({ setHeaders: headersConfig });
        //console.log("HttpTokenInterceptor: inserted token")
        return next.handle(request);
    }
}
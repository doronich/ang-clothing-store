import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizeInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(null, (err: HttpErrorResponse) => {
                if (err.status === 401 || err.status === 403) {
                    console.log("UnauthorizeInterceptor: Unathorized")
                    this.router.navigateByUrl('/login');
                }
                return next.handle(req);
            })
        )
    }
}
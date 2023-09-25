"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[395],{1731:(C,u,o)=>{o.d(u,{J:()=>_});var d=o(5619);const r_baseUrlData="https://ecommerce.routemisr.com/api/v1";var i=o(4769),t=o(9862),h=o(2425);let _=(()=>{var c;class m{constructor(e,s){this._HttpClient=e,this._ToastrService=s,this.cartNumber=new d.X(0),this.whishNumber=new d.X(0),this.whishList=new d.X([])}getUserOrders(e){return this._HttpClient.get(r_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:s=>{"success"===s.status&&(this._ToastrService.success(s.message),this.cartNumber.next(s.numOfCartItems))}})}SetcheckOut(e,s){return this._HttpClient.post(r_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart`,s)}getProducts(e=1){return this._HttpClient.get(r_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(r_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(r_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(r_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(r_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(r_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(r_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(r_baseUrlData+"/cart")}updatePoductCount(e,s){return this._HttpClient.put(r_baseUrlData+"/cart/"+e,{count:s})}deletePoductCart(e){return this._HttpClient.delete(r_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(r_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(r_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(r_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(r_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(r_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(r_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(r_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(r_baseUrlData+`/addresses/${e}`)}}return(c=m).\u0275fac=function(e){return new(e||c)(i.LFG(t.eN),i.LFG(h._W))},c.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),m})()},7395:(C,u,o)=>{o.r(u),o.d(u,{ProfileComponent:()=>g});var d=o(2425),r=o(6814),i=o(95),t=o(4769),h=o(1731),_=o(4768);function c(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"tr",14)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"span",15),t.NdJ("click",function(){const p=t.CHM(n).$implicit,b=t.oxw(2);return t.KtG(b.removeAddress(p._id))}),t._UZ(10,"i",16),t.qZA()()}if(2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.details),t.xp6(2),t.Oqu(n.phone),t.xp6(2),t.Oqu(n.city)}}function m(e,s){if(1&e&&(t.TgZ(0,"table",11)(1,"thead")(2,"tr",12)(3,"th"),t._uU(4,"Name:"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Details:"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Phone:"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"City:"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,c,11,4,"tr",13),t.qZA()()),2&e){const n=t.oxw();t.xp6(12),t.Q6J("ngForOf",n.profileData)}}let g=(()=>{var e;class s{constructor(a,l,p,b){this._EcomdataService=a,this._AuthService=l,this._fb=p,this._ToastrService=b,this.userName="",this.profileData=[]}ngOnInit(){this._AuthService.userData.subscribe(a=>{this.userName=a.name}),this.addressForm=this._fb.group({name:[""],details:[""],phone:[""],city:[""]}),this._EcomdataService.getAddresses().subscribe({next:a=>{this.profileData=a.data}})}addAddress(){this._EcomdataService.setAddresses(this.addressForm.value).subscribe({next:a=>{this.profileData=a.data,this.addressForm.reset(),this._ToastrService.success(a.message)}})}removeAddress(a){this._EcomdataService.removeAddresses(a).subscribe({next:l=>{this.profileData=l.data,this._ToastrService.success(l.message)}})}}return(e=s).\u0275fac=function(a){return new(a||e)(t.Y36(h.J),t.Y36(_.e),t.Y36(i.qu),t.Y36(d._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],standalone:!0,features:[t.jDz],decls:17,vars:3,consts:[[1,"text-center"],[1,"table-responsive","table-data"],["class","table",4,"ngIf"],[1,"border","rounded","p-3","shadow","mt-5",3,"formGroup","ngSubmit"],[1,"row","g-3"],[1,"col-md-6","col-lg-4","col-xl-3"],["type","text","placeholder","Name","formControlName","name",1,"form-control"],["placeholder","Details","formControlName","details",1,"form-control"],["type","tel","placeholder","Phone","formControlName","phone",1,"form-control"],["type","text","placeholder","City","formControlName","city",1,"form-control"],["type","submit",1,"main-btn","mx-auto"],[1,"table"],[1,"table-primary"],["class","small position-relative",4,"ngFor","ngForOf"],[1,"small","position-relative"],["role","button",1,"position-absolute","end-0","top-50","translate-middle-y","me-4","delete",3,"click"],[1,"fas","fa-trash","text-danger","fa-xl"]],template:function(a,l){1&a&&(t.TgZ(0,"section")(1,"h1",0),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,m,13,1,"table",2),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return l.addAddress()}),t.TgZ(6,"div",4)(7,"div",5),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",5),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"button",10),t._uU(16,"ADD ADDRESS"),t.qZA()()()()),2&a&&(t.xp6(2),t.hij("Hello Mr: ",l.userName,""),t.xp6(2),t.Q6J("ngIf",l.profileData.length),t.xp6(1),t.Q6J("formGroup",l.addressForm))},dependencies:[r.ez,r.sg,r.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.Rh],styles:[".table-data[_ngcontent-%COMP%]{max-height:60vh;overflow-y:auto}.table-data[_ngcontent-%COMP%]::-webkit-scrollbar-track{width:initial!important}.table-data[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:initial!important}.table-data[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{all:unset;background-color:#07b020}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{opacity:0;transition:opacity 1s}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%]{opacity:1}"]}),s})()}}]);
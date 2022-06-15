import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  // 该模块中定义的组件
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  // 该模块的依赖
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsComponent
  ],
  // AppComponent加载为顶层组件
  bootstrap: [AppComponent]
})
export class AppModule { }

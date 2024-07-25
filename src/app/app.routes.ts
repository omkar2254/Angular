import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { AddEmployeelistComponent } from './component/add-employeelist/add-employeelist.component';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirComponentComponent } from './component/directive/structural-dir-component/structural-dir-component.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { MyFormComponent } from './component/my-form/my-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ApiComponentComponent } from './component/api-component/api-component.component';
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';
import { ParentComponent } from './component/hooks/parent/parent.component';
import { NgTemplateComponent } from './component/ng-template/ng-template.component';
import { NgContainerComponent } from './component/ng-container/ng-container.component';
import { ViewChildComponent } from './component/view-child/view-child.component';

export const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'add-employee-list',
        component: AddEmployeelistComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'structural-directive',
        component: StructuralDirComponentComponent
    },
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
    },
    {
        path:'control-flow',
        component:ControlFlowComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'form',
        component:MyFormComponent
    },
    {
        path: 'app-reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'api-component',
        component: ApiComponentComponent
    },
    {
        path: 'app-lifecycle',
        component: LifecycleComponent
    },
    {
        path: 'ng-template',
        component: NgTemplateComponent
    },
    {
        path: 'ng-container',
        component: NgContainerComponent
    },
    {
        path: 'view-child',
        component: ViewChildComponent
    }
   
];

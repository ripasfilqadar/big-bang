import {
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatIconModule,
	MatTooltipModule,
	MatDialogModule
} from '@angular/material'


import { animationModule, animation } from './animation'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { PusintekUiModule } from '../../pusintek-ui/pusintek-ui.module'
import { WingModule } from '../../wing/wing.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release/datatable.module'

export const defaultBaseMat = [
	MatCardModule,
	MatButtonModule,
	MatInputModule,
	MatIconModule,
	MatTooltipModule,
	MatDialogModule,
	PusintekUiModule,
]

export const DataTableModuleImport = [
	...defaultBaseMat,
	...animationModule,
	WingModule,
	NgxDatatableModule,
	FlexLayoutModule,
	ReactiveFormsModule,
	FormsModule
	]

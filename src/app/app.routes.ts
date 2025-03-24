import { Routes } from '@angular/router';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { CrmComponent } from './dashboard/crm/crm.component';
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { LmsComponent } from './dashboard/lms/lms.component';
import { HelpDeskComponent } from './dashboard/help-desk/help-desk.component';
import { AppsComponent } from './apps/apps.component';
import { ToDoListComponent } from './apps/to-do-list/to-do-list.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { ContactsComponent } from './apps/contacts/contacts.component';
import { ChatComponent } from './apps/chat/chat.component';
import { EmailComponent } from './apps/email/email.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ComposeComponent } from './apps/email/compose/compose.component';
import { ReadComponent } from './apps/email/read/read.component';
import { KanbanBoardComponent } from './apps/kanban-board/kanban-board.component';
import { FileManagerComponent } from './apps/file-manager/file-manager.component';
import { EcommercePageComponent } from './pages/ecommerce-page/ecommerce-page.component';
import { EProductsGridComponent } from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import { EProductsListComponent } from './pages/ecommerce-page/e-products-list/e-products-list.component';
import { EProductDetailsComponent } from './pages/ecommerce-page/e-product-details/e-product-details.component';
import { ECreateProductComponent } from './pages/ecommerce-page/e-create-product/e-create-product.component';
import { ECartComponent } from './pages/ecommerce-page/e-cart/e-cart.component';
import { ECheckoutComponent } from './pages/ecommerce-page/e-checkout/e-checkout.component';
import { EOrdersListComponent } from './pages/ecommerce-page/e-orders-list/e-orders-list.component';
import { EOrderDetailsComponent } from './pages/ecommerce-page/e-order-details/e-order-details.component';
import { ECustomersListComponent } from './pages/ecommerce-page/e-customers-list/e-customers-list.component';
import { ESellersComponent } from './pages/ecommerce-page/e-sellers/e-sellers.component';
import { ESellerDetailsComponent } from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import { CrmPageComponent } from './pages/crm-page/crm-page.component';
import { CContactsComponent } from './pages/crm-page/c-contacts/c-contacts.component';
import { CCustomersComponent } from './pages/crm-page/c-customers/c-customers.component';
import { COpportunitiesComponent } from './pages/crm-page/c-opportunities/c-opportunities.component';
import { CLeadsComponent } from './pages/crm-page/c-leads/c-leads.component';
import { ProjectManagementPageComponent } from './pages/project-management-page/project-management-page.component';
import { PmProjectsListComponent } from './pages/project-management-page/pm-projects-list/pm-projects-list.component';
import { PmProjectDetailsComponent } from './pages/project-management-page/pm-project-details/pm-project-details.component';
import { PmCreateProjectComponent } from './pages/project-management-page/pm-create-project/pm-create-project.component';
import { PmClientsComponent } from './pages/project-management-page/pm-clients/pm-clients.component';
import { PmTeamsComponent } from './pages/project-management-page/pm-teams/pm-teams.component';
import { PmTasksComponent } from './pages/project-management-page/pm-tasks/pm-tasks.component';
import { PmUsersComponent } from './pages/project-management-page/pm-users/pm-users.component';
import { PmKanbanBoardComponent } from './pages/project-management-page/pm-kanban-board/pm-kanban-board.component';
import { LmsPageComponent } from './pages/lms-page/lms-page.component';
import { LCoursesListComponent } from './pages/lms-page/l-courses-list/l-courses-list.component';
import { LCourseDetailsComponent } from './pages/lms-page/l-course-details/l-course-details.component';
import { LLessonPreviewComponent } from './pages/lms-page/l-lesson-preview/l-lesson-preview.component';
import { LCreateCourseComponent } from './pages/lms-page/l-create-course/l-create-course.component';
import { HelpDeskPageComponent } from './pages/help-desk-page/help-desk-page.component';
import { HdTicketsComponent } from './pages/help-desk-page/hd-tickets/hd-tickets.component';
import { HdReportsComponent } from './pages/help-desk-page/hd-reports/hd-reports.component';
import { HdAgentsComponent } from './pages/help-desk-page/hd-agents/hd-agents.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsListComponent } from './pages/events-page/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events-page/event-details/event-details.component';
import { CreateAnEventComponent } from './pages/events-page/create-an-event/create-an-event.component';
import { SocialFeedPageComponent } from './pages/social-feed-page/social-feed-page.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { InvoicesComponent } from './pages/invoices-page/invoices/invoices.component';
import { InvoiceDetailsComponent } from './pages/invoices-page/invoice-details/invoice-details.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamMembersComponent } from './pages/users-page/team-members/team-members.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { AddUserComponent } from './pages/users-page/add-user/add-user.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PUserProfileComponent } from './pages/profile-page/p-user-profile/p-user-profile.component';
import { PTeamsComponent } from './pages/profile-page/p-teams/p-teams.component';
import { PProjectsComponent } from './pages/profile-page/p-projects/p-projects.component';
import { StarterComponent } from './starter/starter.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { FeathericonsComponent } from './icons/feathericons/feathericons.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AutocompleteComponent } from './ui-elements/autocomplete/autocomplete.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { AccordionComponent } from './ui-elements/accordion/accordion.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { BreadcrumbComponent } from './ui-elements/breadcrumb/breadcrumb.component';
import { ButtonToggleComponent } from './ui-elements/button-toggle/button-toggle.component';
import { BottomSheetComponent } from './ui-elements/bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { CardsComponent } from './ui-elements/cards/cards.component';
import { CarouselsComponent } from './ui-elements/carousels/carousels.component';
import { CheckboxComponent } from './ui-elements/checkbox/checkbox.component';
import { ChipsComponent } from './ui-elements/chips/chips.component';
import { ClipboardComponent } from './ui-elements/clipboard/clipboard.component';
import { ColorPickerComponent } from './ui-elements/color-picker/color-picker.component';
import { DatepickerComponent } from './ui-elements/datepicker/datepicker.component';
import { DialogComponent } from './ui-elements/dialog/dialog.component';
import { DividerComponent } from './ui-elements/divider/divider.component';
import { DragDropComponent } from './ui-elements/drag-drop/drag-drop.component';
import { ExpansionComponent } from './ui-elements/expansion/expansion.component';
import { FormFieldComponent } from './ui-elements/form-field/form-field.component';
import { GridListComponent } from './ui-elements/grid-list/grid-list.component';
import { IconComponent } from './ui-elements/icon/icon.component';
import { InputComponent } from './ui-elements/input/input.component';
import { ListComponent } from './ui-elements/list/list.component';
import { ListboxComponent } from './ui-elements/listbox/listbox.component';
import { MenusComponent } from './ui-elements/menus/menus.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { ProgressBarComponent } from './ui-elements/progress-bar/progress-bar.component';
import { RadioComponent } from './ui-elements/radio/radio.component';
import { RatioComponent } from './ui-elements/ratio/ratio.component';
import { SelectComponent } from './ui-elements/select/select.component';
import { SidenavComponent } from './ui-elements/sidenav/sidenav.component';
import { SlideToggleComponent } from './ui-elements/slide-toggle/slide-toggle.component';
import { SliderComponent } from './ui-elements/slider/slider.component';
import { SnackbarComponent } from './ui-elements/snackbar/snackbar.component';
import { StepperComponent } from './ui-elements/stepper/stepper.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { UtilitiesComponent } from './ui-elements/utilities/utilities.component';
import { VideosComponent } from './ui-elements/videos/videos.component';
import { TreeComponent } from './ui-elements/tree/tree.component';
import { TooltipComponent } from './ui-elements/tooltip/tooltip.component';
import { ToolbarComponent } from './ui-elements/toolbar/toolbar.component';
import { TabsComponent } from './ui-elements/tabs/tabs.component';
import { TableComponent } from './ui-elements/table/table.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { BasicElementsComponent } from './forms/basic-elements/basic-elements.component';
import { AdvancedElementsComponent } from './forms/advanced-elements/advanced-elements.component';
import { WizardComponent } from './forms/wizard/wizard.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { FileUploaderComponent } from './forms/file-uploader/file-uploader.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { LineChartsComponent } from './apexcharts/line-charts/line-charts.component';
import { AreaChartsComponent } from './apexcharts/area-charts/area-charts.component';
import { ColumnChartsComponent } from './apexcharts/column-charts/column-charts.component';
import { MixedChartsComponent } from './apexcharts/mixed-charts/mixed-charts.component';
import { RadialbarChartsComponent } from './apexcharts/radialbar-charts/radialbar-charts.component';
import { RadarChartsComponent } from './apexcharts/radar-charts/radar-charts.component';
import { PieChartsComponent } from './apexcharts/pie-charts/pie-charts.component';
import { PolarChartsComponent } from './apexcharts/polar-charts/polar-charts.component';
import { MoreChartsComponent } from './apexcharts/more-charts/more-charts.component';
import { AuthGuard } from './guards/auth.guard';
import { EProductEditComponent } from './pages/ecommerce-page/e-product-edit/e-product-edit.component';

export const routes: Routes = [
    {path: '', redirectTo:'authentication',pathMatch: 'full'},
    {path: 'otp', redirectTo:'confirm-otp',pathMatch: 'full'},
    {path: 'crm', component: CrmComponent, canActivate: [AuthGuard] },
    {path: 'project-management', component: ProjectManagementComponent, canActivate: [AuthGuard] },
    {path: 'lms', component: LmsComponent, canActivate: [AuthGuard] },
    {path: 'help-desk', component: HelpDeskComponent, canActivate: [AuthGuard] },
    {
        path: 'apps',
        component: AppsComponent,
        children: [
            {path: '', component: ToDoListComponent, canActivate: [AuthGuard] },
            {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
            {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
            {path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
            {
                path: 'email',
                component: EmailComponent,
                children: [
                    {path: '', component: InboxComponent, canActivate: [AuthGuard] },
                    {path: 'compose', component: ComposeComponent, canActivate: [AuthGuard] },
                    {path: 'read', component: ReadComponent}
                ]
            },
            {path: 'kanban-board', component: KanbanBoardComponent, canActivate: [AuthGuard] },
            {path: 'file-manager', component: FileManagerComponent}
        ]
    },
    {
        path: 'car-page',
        component: EcommercePageComponent,
        children: [
            {path: '', component: EProductsGridComponent, canActivate: [AuthGuard] },
            {path: 'products-list', component: EProductsListComponent, canActivate: [AuthGuard] },
            {path: 'product-details/:id', component: EProductDetailsComponent, canActivate: [AuthGuard] },
            {path: 'product-edit/:id', component: EProductEditComponent, canActivate: [AuthGuard] },
            {path: 'create-product', component: ECreateProductComponent, canActivate: [AuthGuard] },
            {path: 'cart', component: ECartComponent, canActivate: [AuthGuard] },
            {path: 'checkout', component: ECheckoutComponent, canActivate: [AuthGuard] },
            {path: 'orders-list', component: EOrdersListComponent, canActivate: [AuthGuard] },
            {path: 'order-details', component: EOrderDetailsComponent, canActivate: [AuthGuard] },
            {path: 'customers-list', component: ECustomersListComponent, canActivate: [AuthGuard] },
            {path: 'sellers', component: ESellersComponent, canActivate: [AuthGuard] },
            {path: 'seller-details', component: ESellerDetailsComponent}
        ]
    },
    {
        path: 'crm-page',
        component: CrmPageComponent,
        children: [
            {path: '', component: CContactsComponent, canActivate: [AuthGuard] },
            {path: 'opportunities', component: COpportunitiesComponent, canActivate: [AuthGuard] },
            {path: 'leads', component: CLeadsComponent, canActivate: [AuthGuard] },
            {path: 'customers', component: CCustomersComponent}
        ]
    },
    {
        path: 'project-management-page',
        component: ProjectManagementPageComponent,
        children: [
            {path: '', component: PmProjectsListComponent, canActivate: [AuthGuard] },
            {path: 'project-details', component: PmProjectDetailsComponent, canActivate: [AuthGuard] },
            {path: 'create-project', component: PmCreateProjectComponent, canActivate: [AuthGuard] },
            {path: 'clients', component: PmClientsComponent, canActivate: [AuthGuard] },
            {path: 'teams', component: PmTeamsComponent, canActivate: [AuthGuard] },
            {path: 'tasks', component: PmTasksComponent, canActivate: [AuthGuard] },
            {path: 'users', component: PmUsersComponent, canActivate: [AuthGuard] },
            {path: 'kanban-board', component: PmKanbanBoardComponent}
        ]
    },
    {
        path: 'lms-page',
        component: LmsPageComponent,
        children: [
            {path: '', component: LCoursesListComponent, canActivate: [AuthGuard] },
            {path: 'course-details', component: LCourseDetailsComponent, canActivate: [AuthGuard] },
            {path: 'lesson-preview', component: LLessonPreviewComponent, canActivate: [AuthGuard] },
            {path: 'create-course', component: LCreateCourseComponent}
        ]
    },
    {
        path: 'help-desk-page',
        component: HelpDeskPageComponent,
        children: [
            {path: '', component: HdTicketsComponent, canActivate: [AuthGuard] },
            {path: 'reports', component: HdReportsComponent, canActivate: [AuthGuard] },
            {path: 'agents', component: HdAgentsComponent}
        ]
    },
    {
        path: 'events',
        component: EventsPageComponent,
        children: [
            {path: '', component: EventsListComponent, canActivate: [AuthGuard] },
            {path: 'event-details', component: EventDetailsComponent, canActivate: [AuthGuard] },
            {path: 'create-an-event', component: CreateAnEventComponent}
        ]
    },
    {path: 'social-feed', component: SocialFeedPageComponent, canActivate: [AuthGuard] },
    {
        path: 'invoices',
        component: InvoicesPageComponent,
        children: [
            {path: '', component: InvoicesComponent, canActivate: [AuthGuard] },
            {path: 'invoice-details', component: InvoiceDetailsComponent}
        ]
    },
    {
        path: 'users',
        component: UsersPageComponent,
        children: [
            {path: '', component: TeamMembersComponent, canActivate: [AuthGuard] },
            {path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard] },
            {path: 'add-user', component: AddUserComponent}
        ]
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        children: [
            {path: '', component: PUserProfileComponent, canActivate: [AuthGuard] },
            {path: 'teams', component: PTeamsComponent, canActivate: [AuthGuard] },
            {path: 'projects', component: PProjectsComponent}
        ]
    },
    {path: 'starter', component: StarterComponent, canActivate: [AuthGuard] },
    {
        path: 'icons',
        component: IconsComponent,
        children: [
            {path: '', component: MaterialSymbolsComponent, canActivate: [AuthGuard] },
            {path: 'feathericons', component: FeathericonsComponent, canActivate: [AuthGuard] },
            {path: 'remixicon', component: RemixiconComponent}
        ]
    },
    {
        path: 'ui-kit',
        component: UiElementsComponent,
        children: [
            {path: '', component: AlertsComponent, canActivate: [AuthGuard] },
            {path: 'autocomplete', component: AutocompleteComponent, canActivate: [AuthGuard] },
            {path: 'avatars', component: AvatarsComponent, canActivate: [AuthGuard] },
            {path: 'accordion', component: AccordionComponent, canActivate: [AuthGuard] },
            {path: 'badges', component: BadgesComponent, canActivate: [AuthGuard] },
            {path: 'breadcrumb', component: BreadcrumbComponent, canActivate: [AuthGuard] },
            {path: 'button-toggle', component: ButtonToggleComponent, canActivate: [AuthGuard] },
            {path: 'bottom-sheet', component: BottomSheetComponent, canActivate: [AuthGuard] },
            {path: 'buttons', component: ButtonsComponent, canActivate: [AuthGuard] },
            {path: 'cards', component: CardsComponent, canActivate: [AuthGuard] },
            {path: 'carousels', component: CarouselsComponent, canActivate: [AuthGuard] },
            {path: 'checkbox', component: CheckboxComponent, canActivate: [AuthGuard] },
            {path: 'chips', component: ChipsComponent, canActivate: [AuthGuard] },
            {path: 'clipboard', component: ClipboardComponent, canActivate: [AuthGuard] },
            {path: 'color-picker', component: ColorPickerComponent, canActivate: [AuthGuard] },
            {path: 'datepicker', component: DatepickerComponent, canActivate: [AuthGuard] },
            {path: 'dialog', component: DialogComponent, canActivate: [AuthGuard] },
            {path: 'divider', component: DividerComponent, canActivate: [AuthGuard] },
            {path: 'drag-drop', component: DragDropComponent, canActivate: [AuthGuard] },
            {path: 'expansion', component: ExpansionComponent, canActivate: [AuthGuard] },
            {path: 'form-field', component: FormFieldComponent, canActivate: [AuthGuard] },
            {path: 'grid-list', component: GridListComponent, canActivate: [AuthGuard] },
            {path: 'icon', component: IconComponent, canActivate: [AuthGuard] },
            {path: 'input', component: InputComponent, canActivate: [AuthGuard] },
            {path: 'list', component: ListComponent, canActivate: [AuthGuard] },
            {path: 'listbox', component: ListboxComponent, canActivate: [AuthGuard] },
            {path: 'menus', component: MenusComponent, canActivate: [AuthGuard] },
            {path: 'pagination', component: PaginationComponent, canActivate: [AuthGuard] },
            {path: 'progress-bar', component: ProgressBarComponent, canActivate: [AuthGuard] },
            {path: 'radio', component: RadioComponent, canActivate: [AuthGuard] },
            {path: 'ratio', component: RatioComponent, canActivate: [AuthGuard] },
            {path: 'select', component: SelectComponent, canActivate: [AuthGuard] },
            {path: 'sidenav', component: SidenavComponent, canActivate: [AuthGuard] },
            {path: 'slide-toggle', component: SlideToggleComponent, canActivate: [AuthGuard] },
            {path: 'slider', component: SliderComponent, canActivate: [AuthGuard] },
            {path: 'snackbar', component: SnackbarComponent, canActivate: [AuthGuard] },
            {path: 'stepper', component: StepperComponent, canActivate: [AuthGuard] },
            {path: 'table', component: TableComponent, canActivate: [AuthGuard] },
            {path: 'tabs', component: TabsComponent, canActivate: [AuthGuard] },
            {path: 'toolbar', component: ToolbarComponent, canActivate: [AuthGuard] },
            {path: 'tooltip', component: TooltipComponent, canActivate: [AuthGuard] },
            {path: 'tree', component: TreeComponent, canActivate: [AuthGuard] },
            {path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
            {path: 'videos', component: VideosComponent, canActivate: [AuthGuard] },
            {path: 'utilities', component: UtilitiesComponent}
        ]
    },
    {path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
    {
        path: 'forms',
        component: FormsComponent,
        children: [
            {path: '', component: BasicElementsComponent, canActivate: [AuthGuard] },
            {path: 'advanced-elements', component: AdvancedElementsComponent, canActivate: [AuthGuard] },
            {path: 'wizard', component: WizardComponent, canActivate: [AuthGuard] },
            {path: 'editors', component: EditorsComponent, canActivate: [AuthGuard] },
            {path: 'file-uploader', component: FileUploaderComponent}
        ]
    },
    {
        path: 'charts',
        component: ApexchartsComponent,
        children: [
            {path: '', component: LineChartsComponent, canActivate: [AuthGuard] },
            {path: 'area', component: AreaChartsComponent, canActivate: [AuthGuard] },
            {path: 'column', component: ColumnChartsComponent, canActivate: [AuthGuard] },
            {path: 'mixed', component: MixedChartsComponent, canActivate: [AuthGuard] },
            {path: 'radialbar', component: RadialbarChartsComponent, canActivate: [AuthGuard] },
            {path: 'radar', component: RadarChartsComponent, canActivate: [AuthGuard] },
            {path: 'pie', component: PieChartsComponent, canActivate: [AuthGuard] },
            {path: 'polar', component: PolarChartsComponent, canActivate: [AuthGuard] },
            {path: 'more', component: MoreChartsComponent}
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent },
            {path: 'sign-up', component: SignUpComponent },
            {path: 'forgot-password', component: ForgotPasswordComponent },
            {path: 'lock-screen', component: LockScreenComponent, },
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },

    {
        path: 'confirm-otp',
        component: AuthenticationComponent,
        children: [
            {path: '', component: ResetPasswordComponent, canActivate: [AuthGuard] },
            
        ]
    },
    {path: 'pricing', component: PricingPageComponent, canActivate: [AuthGuard] },
    {path: 'timeline', component: TimelinePageComponent, canActivate: [AuthGuard] },
    {path: 'faq', component: FaqPageComponent, canActivate: [AuthGuard] },
    {path: 'gallery', component: GalleryPageComponent, canActivate: [AuthGuard] },
    {path: 'testimonials', component: TestimonialsPageComponent, canActivate: [AuthGuard] },
    {path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] },
    {path: 'blank-page', component: BlankPageComponent, canActivate: [AuthGuard] },
    {path: 'internal-error', component: InternalErrorComponent, canActivate: [AuthGuard] },
    {path: 'widgets', component: WidgetsComponent, canActivate: [AuthGuard] },
    {path: 'maps', component: MapsPageComponent, canActivate: [AuthGuard] },
    {path: 'notifications', component: NotificationsPageComponent, canActivate: [AuthGuard] },
    {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {path: '', component: AccountSettingsComponent, canActivate: [AuthGuard] },
            {path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
            {path: 'connections', component: ConnectionsComponent, canActivate: [AuthGuard] },
            {path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [AuthGuard] },
            {path: 'terms-conditions', component: TermsConditionsComponent , canActivate: [AuthGuard]}
        ]
    },
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];
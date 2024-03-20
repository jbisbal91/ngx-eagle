import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken, makeEnvironmentProviders, } from '@angular/core';
export const DIALOG_DOCUMENT_REF = new InjectionToken('A reference to the document. Useful for iframes that want appends to parent window', {
    providedIn: 'root',
    factory() {
        return inject(DOCUMENT);
    },
});
export function defaultGlobalConfig() {
    return {
        id: undefined,
        container: inject(DIALOG_DOCUMENT_REF).body,
        backdrop: true,
        closeButton: true,
        enableClose: {
            backdrop: true,
            escape: true,
        },
        draggable: false,
        dragConstraint: 'none',
        resizable: false,
        size: 'md',
        windowClass: undefined,
        width: undefined,
        minWidth: undefined,
        maxWidth: undefined,
        height: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        data: undefined,
        vcr: undefined,
        sizes: {
            sm: {
                height: 'auto',
                width: '400px',
            },
            md: {
                height: 'auto',
                width: '560px',
            },
            lg: {
                height: 'auto',
                width: '800px',
            },
            fullScreen: {
                height: '100%',
                width: '100%',
            },
        },
        onClose: undefined,
        onOpen: undefined,
    };
}
export const GLOBAL_DIALOG_CONFIG = new InjectionToken('Global dialog config token', {
    providedIn: 'root',
    factory() {
        return defaultGlobalConfig();
    },
});
export const NODES_TO_INSERT = new InjectionToken('Nodes inserted into the dialog');
export function provideDialogConfig(config) {
    return makeEnvironmentProviders([
        {
            provide: GLOBAL_DIALOG_CONFIG,
            useFactory() {
                const defaultConfig = defaultGlobalConfig();
                return {
                    ...defaultConfig,
                    ...config,
                    sizes: {
                        ...defaultConfig.sizes,
                        ...config.sizes,
                    },
                };
            },
        },
    ]);
}
export function provideDialogDocRef(doc) {
    return makeEnvironmentProviders([
        {
            provide: DIALOG_DOCUMENT_REF,
            useValue: doc,
        },
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2RpYWxvZy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxNQUFNLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixHQUN6QixNQUFNLGVBQWUsQ0FBQztBQUl2QixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FDbkQsb0ZBQW9GLEVBQ3BGO0lBQ0UsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTztRQUNMLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsbUJBQW1CO0lBR2pDLE9BQU87UUFDTCxFQUFFLEVBQUUsU0FBUztRQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJO1FBQzNDLFFBQVEsRUFBRSxJQUFJO1FBQ2QsV0FBVyxFQUFFLElBQUk7UUFDakIsV0FBVyxFQUFFO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsU0FBUyxFQUFFLEtBQUs7UUFDaEIsY0FBYyxFQUFFLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsU0FBUztRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsU0FBUztRQUNwQixJQUFJLEVBQUUsU0FBUztRQUNmLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNELEVBQUUsRUFBRTtnQkFDRixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBRXBELDRCQUE0QixFQUFFO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU87UUFDTCxPQUFPLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FDL0MsZ0NBQWdDLENBQ2pDLENBQUM7QUFFRixNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBbUM7SUFDckUsT0FBTyx3QkFBd0IsQ0FBQztRQUM5QjtZQUNFLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsVUFBVTtnQkFDUixNQUFNLGFBQWEsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QyxPQUFPO29CQUNMLEdBQUcsYUFBYTtvQkFDaEIsR0FBRyxNQUFNO29CQUNULEtBQUssRUFBRTt3QkFDTCxHQUFHLGFBQWEsQ0FBQyxLQUFLO3dCQUN0QixHQUFHLE1BQU0sQ0FBQyxLQUFLO3FCQUNoQjtpQkFDRixDQUFDO1lBQ0osQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxHQUFhO0lBQy9DLE9BQU8sd0JBQXdCLENBQUM7UUFDOUI7WUFDRSxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIGluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDb25maWcsIEdsb2JhbERpYWxvZ0NvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJQUxPR19ET0NVTUVOVF9SRUYgPSBuZXcgSW5qZWN0aW9uVG9rZW4oXHJcbiAgJ0EgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudC4gVXNlZnVsIGZvciBpZnJhbWVzIHRoYXQgd2FudCBhcHBlbmRzIHRvIHBhcmVudCB3aW5kb3cnLFxyXG4gIHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxuICAgIGZhY3RvcnkoKSB7XHJcbiAgICAgIHJldHVybiBpbmplY3QoRE9DVU1FTlQpO1xyXG4gICAgfSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEdsb2JhbENvbmZpZygpOiBQYXJ0aWFsPFxyXG4gIEdsb2JhbERpYWxvZ0NvbmZpZyAmIERpYWxvZ0NvbmZpZ1xyXG4+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IHVuZGVmaW5lZCxcclxuICAgIGNvbnRhaW5lcjogaW5qZWN0KERJQUxPR19ET0NVTUVOVF9SRUYpLmJvZHksXHJcbiAgICBiYWNrZHJvcDogdHJ1ZSxcclxuICAgIGNsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgZW5hYmxlQ2xvc2U6IHtcclxuICAgICAgYmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGVzY2FwZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgZHJhZ0NvbnN0cmFpbnQ6ICdub25lJyxcclxuICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICBzaXplOiAnbWQnLFxyXG4gICAgd2luZG93Q2xhc3M6IHVuZGVmaW5lZCxcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBtaW5XaWR0aDogdW5kZWZpbmVkLFxyXG4gICAgbWF4V2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgbWluSGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcclxuICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgIHZjcjogdW5kZWZpbmVkLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgc206IHtcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICB3aWR0aDogJzQwMHB4JyxcclxuICAgICAgfSxcclxuICAgICAgbWQ6IHtcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICB3aWR0aDogJzU2MHB4JyxcclxuICAgICAgfSxcclxuICAgICAgbGc6IHtcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICB3aWR0aDogJzgwMHB4JyxcclxuICAgICAgfSxcclxuICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb25DbG9zZTogdW5kZWZpbmVkLFxyXG4gICAgb25PcGVuOiB1bmRlZmluZWQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdMT0JBTF9ESUFMT0dfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFxyXG4gIFBhcnRpYWw8R2xvYmFsRGlhbG9nQ29uZmlnPlxyXG4+KCdHbG9iYWwgZGlhbG9nIGNvbmZpZyB0b2tlbicsIHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgZmFjdG9yeSgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0R2xvYmFsQ29uZmlnKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgTk9ERVNfVE9fSU5TRVJUID0gbmV3IEluamVjdGlvblRva2VuPEVsZW1lbnRbXT4oXHJcbiAgJ05vZGVzIGluc2VydGVkIGludG8gdGhlIGRpYWxvZydcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRGlhbG9nQ29uZmlnKGNvbmZpZzogUGFydGlhbDxHbG9iYWxEaWFsb2dDb25maWc+KSB7XHJcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEdMT0JBTF9ESUFMT0dfQ09ORklHLFxyXG4gICAgICB1c2VGYWN0b3J5KCkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBkZWZhdWx0R2xvYmFsQ29uZmlnKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb25maWcsXHJcbiAgICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgICBzaXplczoge1xyXG4gICAgICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLnNpemVzLFxyXG4gICAgICAgICAgICAuLi5jb25maWcuc2l6ZXMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZURpYWxvZ0RvY1JlZihkb2M6IERvY3VtZW50KSB7XHJcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERJQUxPR19ET0NVTUVOVF9SRUYsXHJcbiAgICAgIHVzZVZhbHVlOiBkb2MsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG59XHJcbiJdfQ==
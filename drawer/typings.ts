const DrawerPlacement = ['top', 'right', 'bottom', 'left'] as const;
export type DrawerPlacement = (typeof DrawerPlacement)[number];

export interface DrawerConfig {
        backdrop?: boolean;
        backdropClosable?: boolean;
        placement?: DrawerPlacement;
        closeMobile?: boolean;
        closeDesktop?: boolean;
        onOpen: () => void | undefined;
        onClose: () => void | undefined;
}
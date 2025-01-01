import { Injectable, ComponentRef, ApplicationRef, createComponent, EnvironmentInjector } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private componentRef: ComponentRef<LoadingComponent> | null = null;
  private overlayDiv: HTMLElement | null = null;

  /**
   * Constructor del servicio de carga.
   * @param injector - Proporciona las dependencias necesarias para el componente de carga.
   * @param appRef - Permite gestionar la vista del componente dentro de la aplicación.
   */
  constructor(
    private injector: EnvironmentInjector,
    private appRef: ApplicationRef
  ) { }

  /**
   * Muestra el componente de carga.
   * Crea el componente de carga si no se ha creado aún y lo añade al `body` del documento,
   * junto con un div contenedor que tiene la clase `loading-overlay`.
   */
  show(): void {
    // Verificar si el componente de carga ya ha sido creado
    if (!this.componentRef) {
      // Crear el componente de carga dinámicamente
      this.componentRef = createComponent(LoadingComponent, { environmentInjector: this.injector });

      // Crear un div contenedor para el componente de carga
      this.overlayDiv = document.createElement('div');
      this.overlayDiv.className = 'loading-overlay';

      // Obtener el elemento DOM del componente y agregarlo al div contenedor
      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      this.overlayDiv.appendChild(domElem);

      // Agregar el div contenedor al cuerpo del documento
      document.body.appendChild(this.overlayDiv);

      // Adjuntar la vista del componente al ciclo de vida de la aplicación
      this.appRef.attachView(this.componentRef.hostView);
    }
  }

  /**
   * Oculta el componente de carga.
   * Elimina el div contenedor del `body` del documento y destruye el componente de carga.
   */
  hide(): void {
    // Eliminar el div contenedor si existe
    if (this.overlayDiv) {
      document.body.removeChild(this.overlayDiv);
      this.overlayDiv = null;
    }

    // Destruir el componente de carga si existe
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

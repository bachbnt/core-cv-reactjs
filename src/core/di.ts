interface DIContainerImpl {
  registerSingleton(instance: any, params?: { name: string }): void;
  getSingleton(classType: new () => any, params?: { name: string }): any;
  registerLazySingleton(
    factoryMethod: () => any,
    params?: { name: string }
  ): void;
}

class DIContainer implements DIContainerImpl {
  singletons: { [key: string]: any } = {};

  registerSingleton(instance: any, params?: { name: string }): void {
    const className = instance?.constructor?.name;
    const key = params?.name || className || '';
    this.singletons[key] = {
      instance,
    };
  }

  getSingleton(classType: new () => any, params?: { name: string }): any {
    const className = params?.name || classType?.name || '';
    const singleton = this.singletons[className];
    if (
      typeof singleton?.factoryMethod === 'function' &&
      singleton?.instance === null
    ) {
      singleton.instance = singleton.factoryMethod();
    }
    return singleton?.instance;
  }

  registerLazySingleton(
    factoryMethod: () => any,
    params?: { name: string }
  ): void {
    const regex = /_(\w+)\.default/;
    const className = regex.exec?.(factoryMethod?.toString())?.[1];
    const key = params?.name || className || '';
    this.singletons[key] = {
      factoryMethod,
      instance: null,
    };
  }
}

export default new DIContainer();

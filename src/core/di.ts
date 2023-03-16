type DIParams = {
  name?: string;
};

interface DIContainer {
  getSingleton(classType: new () => any, params?: DIParams | undefined): any;
  registerSingleton(instance: any, params?: DIParams | undefined): void;
  registerLazySingleton(
    factoryMethod: () => any,
    params?: DIParams | undefined
  ): void;
  removeSingleton(
    classType: new () => any,
    params?: DIParams | undefined
  ): void;
  reset(): void;
}

class DIContainerImpl implements DIContainer {
  singletons: { [key: string]: any } = {};

  getSingleton(classType: new () => any, params?: DIParams | undefined): any {
    const className = classType?.name;
    const key = params?.name || className || '';
    const singleton = this.singletons[key];
    if (!singleton) {
      throw new Error(`Singleton not registered: ${key}`);
    }

    if (
      typeof singleton?.factoryMethod === 'function' &&
      singleton?.instance === null
    ) {
      singleton.instance = singleton.factoryMethod();
    }

    return singleton?.instance;
  }

  registerSingleton(instance: any, params?: DIParams | undefined): void {
    const className = instance?.constructor?.name;
    const key = params?.name || className || '';
    this.singletons[key] = {
      instance,
    };
  }

  registerLazySingleton(
    factoryMethod: () => any,
    params?: DIParams | undefined
  ): void {
    const regex = /_(\w+)\.default/;
    const className = regex.exec?.(factoryMethod?.toString())?.[1];
    const key = params?.name || className || '';
    this.singletons[key] = {
      factoryMethod,
      instance: null,
    };
  }

  removeSingleton(
    classType: new () => any,
    params?: DIParams | undefined
  ): void {
    const className = classType?.name;
    const key = params?.name || className || '';
    delete this.singletons[key];
  }

  reset(): void {
    this.singletons = {};
  }
}

export default new DIContainerImpl();

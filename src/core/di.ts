type DIParams = {
  name?: string;
};

interface DIData<T> {
  instance?: T | null;
  factoryMethod?: () => T;
}

interface DIContainer {
  getSingleton<T>(classType: { new (): T }, params?: DIParams): T;
  registerSingleton<T extends { new (...args: any[]): any }>(
    instance: T,
    params?: DIParams
  ): void;
  registerLazySingleton<T>(factoryMethod: () => T, params?: DIParams): void;
  removeSingleton<T>(classType: { new (): T }, params?: DIParams): void;
  reset(): void;
}

class DIContainerImpl implements DIContainer {
  private singletons: { [key: string]: DIData<any> } = {};

  getSingleton<T>(classType: { new (): T }, params?: DIParams): T {
    const className = classType?.name || '';
    const key = params?.name || className;
    const singleton = this.singletons[key];

    if (singleton instanceof classType) {
      throw new Error(`Singleton not registered: ${key}`);
    }

    if (
      typeof singleton.factoryMethod === 'function' &&
      singleton.instance === null
    ) {
      singleton.instance = singleton.factoryMethod();
    }

    return singleton.instance as T;
  }

  registerSingleton<T>(classType: { new (): T }, params?: DIParams): void {
    const className = classType?.name || '';
    const key = params?.name || className;
    this.singletons[key] = { instance: new classType() };
  }

  registerLazySingleton<T>(factoryMethod: () => T, params?: DIParams): void {
    const className =
      (factoryMethod?.toString().match(/_(\w+)\.default/) || [])[1] || '';
    const key = params?.name || className;
    this.singletons[key] = { factoryMethod, instance: null };
  }

  removeSingleton<T>(classType: { new (): T }, params?: DIParams): void {
    const className = classType?.name || '';
    const key = params?.name || className;
    delete this.singletons[key];
  }

  reset(): void {
    this.singletons = {};
  }
}

export default new DIContainerImpl();

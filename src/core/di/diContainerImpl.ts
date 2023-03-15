interface DIContainerImpl {
  registerSingleton(instance: any, params?: { name: string }): void;
  getSingleton(classType: new () => any, params?: { name: string }): any;
  registerLazySingleton(
    factoryMethod: () => any,
    params?: { name: string }
  ): void;
}

export default DIContainerImpl;

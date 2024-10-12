export abstract class IMapper<D, C, E, V = undefined> {
  abstract fromCreate(dto: C): D;

  abstract fromEdit(dto: E): Partial<D>;

  abstract forView?(dto: D): V extends undefined ? never : V;
}

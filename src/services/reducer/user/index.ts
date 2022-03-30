class User {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
  updateActive(state: any, action: any) {
    return {
      ...state,
      users: state.user.map((user: any): any =>
        user.id !== action.id
          ? !!user
          : {
              ...user,
              isActive: action.isActive,
            },
      ),
    };
  }
}
export default new User();

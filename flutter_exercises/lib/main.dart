// ignore_for_file: avoid_print

void main() {
  int x = 7, y = 3;

  /// 2.333....
  print(x / y);

  /// 2   <- truncate int
  print(x ~/ y);

  /// 1   <- resto
  print(x % y);
}

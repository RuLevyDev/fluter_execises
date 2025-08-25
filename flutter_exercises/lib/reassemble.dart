import 'package:flutter/material.dart';

class ReassWidged extends StatefulWidget {
  const ReassWidged({super.key});

  @override
  State<ReassWidged> createState() => _ReassWidgetState();
}

class _ReassWidgetState extends State<ReassWidged> {
  @override
  void reassemble() {
    super.reassemble();
    print("hot reload → reassemble() llamado");
  }

  Widget build(BuildContext context) {
    return const Text('hello');
  }
}

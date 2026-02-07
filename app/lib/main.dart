import 'package:flutter/material.dart';

void main() {
  runApp(const SecureDropApp());
}

// Root widget
class SecureDropApp extends StatelessWidget {
  const SecureDropApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false, // optional: remove debug banner
      home: SecureDrop(),
    );
  }
}

class SecureDrop extends StatefulWidget {
  const SecureDrop({super.key});

  @override
  State<SecureDrop> createState() => _SecureDropState();
}

class _SecureDropState extends State<SecureDrop> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SecureDrop'),
        centerTitle: true, 
      ),
      body: const Center(
        child: Text('Welcome to SecureDrop!'),
      ),
    );
  }
}

# Contributing

Thanks for contributing to VibeCoder Kit. Keep changes focused, preserve existing integrations, and use dummy values in security examples.

## Check your changes

The security scanner's self-tests run without reading project configuration:

```bash
npm test
```

The optional pre-commit scanner checks the current Git index. Review its behavior and output before using it in another project.

## Add or update an integration

Keep the product-building workflow in `skills/vibecoder-kit/`. Keep tool-specific rules in their matching adapter files and avoid duplicating long guidance when a short reference works. Update the README when installation or supported integrations change.

Do not add real credentials. Do not change `.gitignore`; if an ignore entry is required, ask the project owner to add it manually.

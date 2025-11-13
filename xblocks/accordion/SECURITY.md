# Security Documentation - Flashcards XBlock

## Overview

The Flashcards XBlock implements comprehensive security measures to protect against common web vulnerabilities, ensuring safe handling of user-generated content in an educational environment.

## Security Validation

### 1. Input Sanitization

#### Field Length Limits
All user inputs are validated against strict length limits to prevent DoS attacks and storage issues:

```python
MAX_DISPLAY_NAME_LENGTH = 255      # Display name character limit
MAX_FRONT_TITLE_LENGTH = 100       # Card front title limit
MAX_FRONT_SUBTITLE_LENGTH = 100    # Card front subtitle limit
MAX_BACK_TEXT_LENGTH = 10000       # Card back content limit (allows rich HTML)
```

#### Type Validation
- All input data types are strictly validated before processing
- Arrays, objects, and primitive types are checked
- Invalid types are rejected with clear error messages

#### Content Validation
- Required fields are enforced (display_name, front_title, back_text)
- Empty or whitespace-only values are rejected
- Card count limits enforced (1-100 cards)

### 2. HTML Sanitization

All user-provided HTML content (TinyMCE editor output) is sanitized on the backend to prevent XSS attacks:

#### Dangerous Tags Removed:
```python
dangerous_tags = [
    'script',   # Prevents JavaScript injection
    'iframe',   # Prevents clickjacking
    'object',   # Prevents Flash/plugin exploits
    'embed',    # Prevents external content injection
    'link',     # Prevents CSS injection via external stylesheets
    'meta',     # Prevents meta tag injection
    'style',    # Prevents inline CSS injection
    'form',     # Prevents form injection
    'input',    # Prevents hidden input attacks
    'button'    # Prevents fake button attacks
]
```

#### Dangerous Attributes Removed:
```python
dangerous_attrs = [
    'onerror',      # Prevents event handler XSS
    'onload',       # Prevents auto-execution
    'onclick',      # Prevents click-based XSS
    'onmouseover',  # Prevents hover-based XSS
    'onfocus'       # Prevents focus-based XSS
]
```

#### Protocol Validation:
- `javascript:` protocol removed from `href` and `src` attributes
- Prevents JavaScript execution via links and images

### 3. JSON Parsing Protection

All JSON parsing operations use safe error handling to prevent crashes and injection:

```python
@staticmethod
def safe_json_loads(json_str, default=None):
    """
    Safely parse JSON with error handling.
    Returns default value if parsing fails.
    """
    try:
        return json.loads(json_str)
    except (json.JSONDecodeError, TypeError, ValueError):
        return default if default is not None else []
```

**Benefits:**
- Prevents application crashes from malformed JSON
- Provides graceful fallbacks
- Protects against JSON injection attacks

### 4. Error Handling

The XBlock implements comprehensive error handling:

```python
try:
    # ... validation and processing ...
except Exception as e:
    # SECURITY: Don't expose internal details
    return {
        'success': False,
        'error': 'An error occurred while saving. Please try again.'
    }
```

**Security Features:**
- Internal error details are never exposed to users
- Generic error messages prevent information leakage
- Errors are caught at the top level to prevent crashes

## Protection Against Common Vulnerabilities

### XSS (Cross-Site Scripting) - ✅ PROTECTED

**Multiple Layers of Defense:**

1. **React Default Escaping**: All text rendered through React is automatically escaped
2. **Backend HTML Sanitization**: `sanitize_html()` removes dangerous tags and attributes
3. **TinyMCE Safe Defaults**: Editor configured to produce safe HTML
4. **Content Security**: No inline JavaScript allowed in user content

**Example Attack Prevented:**
```html
<!-- Attacker Input -->
<script>alert('XSS')</script>

<!-- After Sanitization -->
<!-- Completely removed -->
```

### CSS Injection - ✅ PROTECTED

**Protection Measures:**
- `<style>` tags removed from user content
- `<link>` tags blocked to prevent external CSS injection
- Inline `style` attributes preserved but `javascript:` URLs removed

### JSON Injection - ✅ PROTECTED

**Protection Measures:**
- All JSON parsing wrapped in try-catch blocks
- Type validation before processing
- Fallback values prevent crashes
- Malformed JSON gracefully handled

**Example:**
```python
# Safe: Will return default instead of crashing
cards = self.safe_json_loads(invalid_json, default=[])
```

### SQL Injection - ✅ NOT APPLICABLE

The XBlock uses OpenEdX's built-in storage system (XBlock fields) which handles all database interactions safely. No raw SQL queries are used.

### File Upload Attacks - ✅ NOT APPLICABLE

The Flashcards XBlock does not support file uploads, eliminating this attack vector entirely.

## Security Best Practices Implemented

### 1. Defense in Depth
- Multiple layers of security (frontend + backend)
- Never trust client-side validation alone
- All inputs sanitized regardless of source

### 2. Fail Securely
- Errors don't expose sensitive information
- Fallback values maintain functionality
- Graceful degradation on invalid data

### 3. Least Privilege
- Only necessary HTML tags allowed
- Minimal permissions for content rendering
- Strict validation of all inputs

### 4. Input Validation
- Whitelist approach for allowed content
- Blacklist for known dangerous patterns
- Type and length validation on all fields

## Security Testing Checklist

When testing the XBlock, verify:

- [ ] HTML tags like `<script>` are removed from back_text
- [ ] Event handlers like `onclick` are stripped
- [ ] `javascript:` URLs are removed from links
- [ ] Field length limits are enforced
- [ ] Invalid JSON doesn't crash the XBlock
- [ ] Error messages don't reveal system internals
- [ ] Empty/whitespace inputs are rejected
- [ ] Card count limits (1-100) are enforced

## Reporting Security Issues

If you discover a security vulnerability:

1. **DO NOT** open a public GitHub issue
2. Contact the development team directly
3. Provide detailed reproduction steps
4. Allow time for a fix before public disclosure

## Security Update Policy

- Security patches are prioritized over features
- Updates are tested in development before production
- Security-related changes are documented in CHANGELOG

## References

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [OpenEdX XBlock Security Best Practices](https://edx.readthedocs.io/projects/xblock-tutorial/en/latest/)

## Version History

### v0.1.0 - 2025-10-19
- Initial implementation with comprehensive security measures
- XSS protection via HTML sanitization
- JSON injection protection
- Input validation and length limits
- Safe error handling

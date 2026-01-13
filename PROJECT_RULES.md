# Church Website Development Rules

## Project Overview
A church website with a public-facing user interface and a Content Management System (CMS) for administrators to manage content, events, and church information.

## Core Development Principles

### 1. Code Efficiency
- **No Unnecessary Code**: Every line of code must serve a clear purpose
- **No Code Injection**: Avoid dynamic code generation or eval-like patterns
- **Clean Architecture**: Follow separation of concerns and single responsibility principles
- **Minimal Dependencies**: Only include essential third-party libraries
- **No Duplicate Code**: Implement reusable components and utilities

### 2. Serverless Function Constraints
- **Maximum 10 Serverless Functions**: Due to deployment platform limitations (e.g., Vercel free tier)
- **Function Consolidation**: Combine related operations into single endpoints where appropriate
- **RESTful Design**: Use standard HTTP methods (GET, POST, PUT, DELETE) efficiently
- **Suggested Function Allocation**:
  1. Authentication/Authorization
  2. Content CRUD operations (pages/articles)
  3. Events CRUD operations
  4. Church details management
  5. Media/image upload handler
  6. Contact form submission
  7. Newsletter subscription
  8. Admin user management
  9. Site configuration
  10. Reserved for future critical needs

### 3. Technology Stack Decisions
- **Framework**: To be determined based on requirements (Next.js, Nuxt, or similar)
- **Database**: To be determined (consider serverless-friendly options)
- **Authentication**: Secure, industry-standard solution
- **Hosting**: Vercel-compatible deployment structure

### 4. Architecture Guidelines

#### Frontend
- Component-based architecture
- Responsive design (mobile-first approach)
- **Mobile Deployment Ready**: Website must be fully functional and optimized for mobile devices
- Touch-friendly interface elements
- Accessibility compliance (WCAG 2.1 Level AA)
- Performance optimization (lazy loading, code splitting)
- SEO-friendly structure

#### CMS (Admin Panel)
- Role-based access control (Admin, Editor roles)
- Intuitive WYSIWYG editor for content
- Media library management
- Preview before publish capability
- Audit trail for content changes

#### Backend
- API-first design
- Stateless serverless functions
- Proper error handling and validation
- Security best practices (input sanitization, SQL injection prevention)
- Rate limiting for API endpoints

### 5. Content Management Scope
The CMS will control:
- Dynamic pages (About, Ministries, etc.)
- Event calendar and event details
- Church announcements and news
- Service times and schedules
- Staff/leadership directory
- Contact information
- Photo galleries

Static elements:
- Homepage hero/banner
- Navigation structure (with dynamic links to managed pages)
- Footer
- Core design/theme

### 6. Security Requirements
- Secure authentication for admin access
- HTTPS only
- Environment variables for sensitive data
- Input validation on all user inputs
- XSS and CSRF protection
- Regular security audits

### 7. Performance Requirements
- Page load time < 3 seconds
- Lighthouse score > 90
- Optimized images (WebP format, responsive sizes)
- Minimal JavaScript bundle size
- Caching strategy for static and dynamic content

### 8. Development Workflow
- Version control with Git
- Clear commit messages
- Feature branch workflow
- Code review before merging
- Testing before deployment (manual testing only - no unnecessary test files or test frameworks)
- Documentation for all major features

### 9. User Experience Principles
- Simple, clean design
- Easy navigation
- Clear call-to-action buttons
- Mobile-responsive layouts
- Fast page transitions
- Graceful error handling

### 10. Maintenance Considerations
- Easy content updates by non-technical staff
- Self-documenting code
- Modular design for easy updates
- Backup and restore capabilities
- Version control for content

## Development Phases

### Phase 1: Planning & Design
- Define complete feature set
- Create wireframes and mockups
- Finalize technology stack
- Database schema design
- API endpoint planning

### Phase 2: Core Infrastructure
- Project setup and configuration
- Authentication system
- Database setup
- Basic serverless functions

### Phase 3: Public Website
- Homepage
- Static page templates
- Dynamic content rendering
- Event listings
- Contact forms

### Phase 4: CMS Development
- Admin dashboard
- Content editor
- Event management
- Media management
- User management

### Phase 5: Testing & Optimization
- Functionality testing
- Performance optimization
- Security audit
- Accessibility testing
- Cross-browser testing

### Phase 6: Deployment & Documentation
- Production deployment
- User documentation
- Admin training materials
- Maintenance guidelines

## Constraints & Limitations
- Maximum 10 serverless functions
- Free tier hosting limitations
- Performance budget adherence
- Mobile-first approach mandatory
- Accessibility compliance required

## Success Criteria
- Fully functional public website
- Complete CMS for content management
- Secure admin authentication
- Fast performance metrics
- Easy to use for non-technical administrators
- Scalable architecture within serverless constraints

---

**Document Version**: 1.0
**Last Updated**: 2025-12-10
**Status**: Draft - Awaiting Approval
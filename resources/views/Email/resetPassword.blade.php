@component('mail::message')
# Reset Password

Hello there!
I see that you forgot your password. Click the link for changing the password

@component('mail::button', ['url' => 'http://localhost:4200/change-password?token='.$token])
Change Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from '@/hooks/use-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeSwitcher } from '@/components/atom/theme/ThemeSwitcher'

interface UserProfile
{
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  profilePicture: string
  timeZone: string
  // themePreference: 'light' | 'dark'
  reportFrequency: 'daily' | 'weekly' | 'monthly'
  lastLogin: string
}

export default function UserProfilePage ()
{
  const { toast } = useToast()

  const [ profile, setProfile ] = useState<UserProfile>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '',
    profilePicture: '',
    timeZone: 'UTC',
    // themePreference: 'light',
    reportFrequency: 'weekly',
    lastLogin: '2024-11-30T15:45:30.000Z'
  })

  const [ passwords, setPasswords ] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [ selectedTab, setSelectedTab ] = useState('profile')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    setProfile({ ...profile, [ e.target.name ]: e.target.value })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    setPasswords({ ...passwords, [ e.target.name ]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) =>
  {
    setProfile({ ...profile, [ name ]: value })
  }

  const handleSaveChanges = () =>
  {
    if (selectedTab === 'profile')
    {
      // Handle saving profile changes
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
        variant: "success"
      })
    } else if (selectedTab === 'password')
    {
      // Handle saving password changes
      toast({
        title: "Password Updated",
        description: "Your password has been successfully updated.",
        variant: "destructive"
      })
    }
  }

  const handleChangePicture = () =>
  {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const file = e.target.files?.[ 0 ]
    if (file)
    {
      const reader = new FileReader()
      reader.onloadend = () =>
      {
        setProfile({ ...profile, profilePicture: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full h-[89vh] mx-auto flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Update your personal information and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={ selectedTab }
            onValueChange={ setSelectedTab }
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="password">Update Password</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="space-y-6">
                <div className="flex items-end space-x-4">
                  <Avatar className="w-20 h-20 rounded-lg">
                    <AvatarImage
                      src={ profile.profilePicture }
                      alt={ `${ profile.firstName } ${ profile.lastName }` }
                      className='object-cover'
                    />
                    <AvatarFallback
                      className="rounded-lg">
                      { profile.firstName[ 0 ].toUpperCase() }
                      { profile.lastName[ 0 ].toUpperCase() }
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" onClick={ handleChangePicture }>Change Picture</Button>
                    <Input
                      type="file"
                      ref={ fileInputRef }
                      className="hidden"
                      accept="image/*"
                      onChange={ handleFileChange }
                      aria-label="Change profile picture"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" value={ profile.firstName } onChange={ handleInputChange } />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={ profile.lastName } onChange={ handleInputChange } />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={ profile.email } onChange={ handleInputChange } />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                    <Input id="phoneNumber" name="phoneNumber" type="tel" value={ profile.phoneNumber } onChange={ handleInputChange } />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeZone">Time Zone</Label>
                    <Select name="timeZone" value={ profile.timeZone } onValueChange={ (value) => handleSelectChange('timeZone', value) }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UTC">UTC</SelectItem>
                        <SelectItem value="America/New_York">Eastern Time</SelectItem>
                        <SelectItem value="America/Chicago">Central Time</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 flex flex-col items-start justify-between">
                      <Label>Report Frequency</Label>
                      <Select
                        defaultValue={ profile.reportFrequency }
                        onValueChange={ (value) =>
                        {
                          setProfile(prev => ({
                            ...prev,
                            reportFrequency: value as 'daily' | 'weekly' | 'monthly'
                          }))
                        } }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 flex flex-col items-start justify-between">
                      <Label htmlFor="themePreference">Theme Preference</Label>
                      <div id="themePreference">
                        <ThemeSwitcher />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Last Login</Label>
                  <p className="text-sm text-muted-foreground">{ new Date(profile.lastLogin).toLocaleString() }</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="oldPassword">Current Password</Label>
                  <Input id="oldPassword" name="oldPassword" type="password" value={ passwords.oldPassword } onChange={ handlePasswordChange } />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" name="newPassword" type="password" value={ passwords.newPassword } onChange={ handlePasswordChange } />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" value={ passwords.confirmPassword } onChange={ handlePasswordChange } />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
      <CardFooter>
        <Button
          variant="secondary"
          onClick={ handleSaveChanges }
        >
          {
            selectedTab === 'profile' ?
              'Update Profile'
              :
              'Update Password'
          }
        </Button>
      </CardFooter>
    </Card>
  )
}

